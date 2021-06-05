# Samples using this library

- [Code Flow with PKCE Using a configuration from an http source and silent renew](#code-flow-with-pkce-using-a-configuration-from-an-http-source-and-silent-renew)
- [Code Flow PKCE with Refresh tokens](#code-flow-pkce-with-refresh-tokens)
- [Code Flow PKCE Auto login](#code-flow-pkce-auto-login)
- [Code Flow with PKCE basic with silent renew](#code-flow-with-pkce-basic-with-silent-renew)
- [Popup Code Flow with PKCE](#popup-code-flow-with-pkce)
- [Code flow with pushed authorization request](#code-flow-with-pushed-authorization-request)
- [Azure B2C Code Flow PKCE with silent renew](#azure-b2c-code-flow-pkce-with-silent-renew)
- [Azure AD Code Flow PKCE with silent renew](#azure-ad-oidc-code-flow-with-pkce)
- [Implicit Flow with silent renew (Not recommended)](#implicit-flow-with-silent-renew-not-recommended)
- [Implicit Flow google (Not recommended)](#implicit-flow-google-not-recommended)
- [Code flow with a lazy loaded module](#code-flow-with-a-lazy-loaded-module)

## Code Flow with PKCE Using a configuration from an http source and silent renew

Sometimes it is required to load the configuration from an http address. You can load the config from your source and map it into the required format using the loader property on the `.forRoot` config.

The properties used in this example are just for demo purposes, you can used any definitions.

### [src code](../projects/sample-code-flow-http-config)

[auth-config.module.ts](../projects/sample-code-flow-http-config/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-http-config/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-http-config/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-http-config/src/app/app.component.html)

## Code Flow PKCE with Refresh tokens

The Code flow with PKCE uses refresh tokens to refresh the session and a the end of the session, the user can logout and revoke the tokens. The demo is setup to use each refresh token only once.

### [src code](../projects/sample-code-flow-refresh-tokens)

[auth-config.module.ts](../projects/sample-code-flow-refresh-tokens/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-refresh-tokens/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-refresh-tokens/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-refresh-tokens/src/app/app.component.html)

## Code Flow PKCE Auto login

The example logins the user in directly without a login click using the Code Flow with PKCE and an Auth Guard.

### [src code](../projects/sample-code-flow-auto-login)

[auth-config.module.ts](../projects/sample-code-flow-auto-login/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-auto-login/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-auto-login/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-auto-login/src/app/app.component.html)

[auto-login.component.ts](../projects/sample-code-flow-auto-login/src/app/auto-login/auto-login.component.ts)

## Code Flow with PKCE basic with silent renew

The is the basic example of the Code Flow with PKCE.

### [src code](../projects/sample-code-flow-multi-iframe)

[auth-config.module.ts](../projects/sample-code-flow-multi-iframe/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-multi-iframe/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-multi-iframe/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-multi-iframe/src/app/app.component.html)

## Popup Code Flow with PKCE

Popup Code Flow with PKCE.

### [src code](../projects/sample-code-flow-popup)

[auth-config.module.ts](../projects/sample-code-flow-popup/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-popup/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-popup/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-popup/src/app/app.component.html)

## Azure B2C Code Flow PKCE with Silent renew

The example uses the Code Flow PKCE with Silent renew with Azure B2C as the STS.

### [src code](../projects/sample-code-flow-azure-b2c)

[auth-config.module.ts](../projects/sample-code-flow-azure-b2c/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-azure-b2c/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-azure-b2c/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-azure-b2c/src/app/app.component.html)

## Azure AD OIDC Code Flow with PKCE

Azure AD sample using OpenID Connect Code Flow with PKCE and a iframe silent renew

### [src code](../projects/sample-code-flow-azuread)

[auth-config.module.ts](../projects/sample-code-flow-azuread/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-azuread/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-azuread/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-azuread/src/app/app.component.html)

## Implicit Flow with silent renew (Not recommended)

The example uses the Implicit Flow with silent renew. This flow is no longer recommended, but some servers support this flow only, and not the Code flow with PKCE.

### [src code](../projects/sample-implicit-flow-silent-renew)

[auth-config.module.ts](../projects/sample-implicit-flow-silent-renew/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-implicit-flow-silent-renew/src/app/app.module.ts)

[app.component.ts](../projects/sample-implicit-flow-silent-renew/src/app/app.component.ts)

[app.component.html](../projects/sample-implicit-flow-silent-renew/src/app/app.component.html)

## Implicit Flow google (Not recommended)

The example uses the Implicit Flow with silent renew with google. This flow is no longer recommended, but some servers support this flow only, and not the Code flow with PKCE.

### [src code](../projects/sample-implicit-flow-google)

[app.module.ts](../projects/sample-implicit-flow-google/src/app/app.module.ts)

[app.component.ts](../projects/sample-implicit-flow-google/src/app/app.component.ts)

[app.component.html](../projects/sample-implicit-flow-google/src/app/app.component.html)

## Code flow with a lazy loaded module

The example uses the Code flow with silent renew but you authenticate in a lazy loaded module

### [src code](../projects/sample-code-flow-lazy-loaded)

[app.module.ts](../projects/sample-code-flow-lazy-loaded/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-lazy-loaded/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-lazy-loaded/src/app/app.component.html)

[lazy.component.ts](../projects/sample-code-flow-lazy-loaded/src/app/lazy/lazy.component.ts)

[lazy.component.html](../projects/sample-code-flow-lazy-loaded/src/app/lazy/lazy.component.html)

## Code flow with pushed authorization request

example using OAuth pushed authorization requests

### [src code](../projects/sample-code-flow-par)

[auth-config.module.ts](../projects/sample-code-flow-par/src/app/auth-config.module.ts)

[app.module.ts](../projects/sample-code-flow-par/src/app/app.module.ts)

[app.component.ts](../projects/sample-code-flow-par/src/app/app.component.ts)

[app.component.html](../projects/sample-code-flow-par/src/app/app.component.html)
