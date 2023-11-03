package gov.va.mobileapp.native_modules

import android.content.Intent
import android.content.Intent.*
import android.content.pm.PackageManager
import android.net.Uri
import android.webkit.CookieManager
import android.webkit.ValueCallback
import androidx.browser.customtabs.CustomTabColorSchemeParams
import androidx.browser.customtabs.CustomTabsIntent
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import gov.va.mobileapp.R

class CustomTabsIntentModule(private val context: ReactApplicationContext) :
        ReactContextBaseJavaModule(context) {

    @Throws(java.lang.Exception::class)
    private fun getCookieManager(): CookieManager? {
        return try {
            val cookieManager = CookieManager.getInstance()
            cookieManager.setAcceptCookie(true)
            cookieManager
        } catch (e: java.lang.Exception) {
            throw java.lang.Exception(e)
        }
    }


    @ReactMethod
    fun beginAuthSession(
            authEndPoint: String,
            codeChallenge: String,
            promise: Promise
    ) {
        try {
            val authURI =
                    Uri.parse(authEndPoint)
                            .buildUpon()
                            .also {
                                with(it) {
                                    appendQueryParameter("code_challenge_method", "S256")
                                    appendQueryParameter("code_challenge", codeChallenge)
                                    appendQueryParameter("application", "vamobile")
                                    appendQueryParameter("oauth", "true")
                                }
                            }
                            .build()

            val defaultScheme =
                    CustomTabColorSchemeParams.Builder()
                            .also {
                                it.setToolbarColor(
                                        context.resources.getColor(
                                                R.color.grayLightest,
                                                context.theme
                                        )
                                )
                            }
                            .build()

            val darkScheme =
                    CustomTabColorSchemeParams.Builder()
                            .also {
                                it.setToolbarColor(
                                        context.resources.getColor(
                                                R.color.darkmodeGrayDark,
                                                context.theme
                                        )
                                )
                            }
                            .build()

            val customTabsIntent =
                    CustomTabsIntent.Builder()
                            .apply {
                                setDefaultColorSchemeParams(defaultScheme)
                                setColorSchemeParams(CustomTabsIntent.COLOR_SCHEME_DARK, darkScheme)
                                setShareState(CustomTabsIntent.SHARE_STATE_OFF)
                                setShowTitle(true)
                            }
                            .build()

            // Check default browser to prevent Firefox login issue (Android only)
            val browserIntent = Intent("android.intent.action.VIEW", Uri.parse("https://"));
            val resolveInfo = context.packageManager.resolveActivity(browserIntent, PackageManager.MATCH_DEFAULT_ONLY);
            val packageName = resolveInfo?.activityInfo?.packageName;
            if (packageName != null && packageName.contains("firefox")) {
                // Default browser is Firefox. Need flag for login to succeed
                customTabsIntent.intent.addFlags(FLAG_ACTIVITY_NEW_TASK)
            }

            context.currentActivity?.apply { customTabsIntent.launchUrl(this, authURI) }
            promise.resolve(true)
        } catch (e: Throwable) {
            promise.reject("Custom Tabs Error", e)
        }
    }

    @ReactMethod
    fun clearCookies(
        promise: Promise
    ) {
        try {
            val cookieManager: CookieManager? = getCookieManager()
            cookieManager?.removeAllCookies(ValueCallback<Boolean?> { value ->
                promise.resolve(
                    value
                )
            })
            cookieManager?.flush()
        } catch (e: Exception) {
            promise.reject(e)
        }
    }

    override fun getName() = "CustomTabsIntentModule"
}
