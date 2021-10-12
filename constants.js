const ACIOSSTAGING = "56b8p1k3luVaIAma3pJTtQbnOdjEPPFvotATo"
const ACIOSPRODUCTION = "wRHIObZfBYKbrfSW_laHGeDwvbG34YLpqgr3l"
const ACANDROIDSTAGING = "yF0fVCCRkuX21cipvIEoquTtCf1sDudUPK1G4"
const ACANDROIDPRODUCTION = "Je9YtbQkSgEL7dFeG9WMvt2X5tCKAsBD169TR"

const isBetaUser = true;

const CodePushKeys = Platform.select({
    ios: {
      STAGING: ACIOSSTAGING,
      PRODUCTION: ACIOSPRODUCTION
    },
    android: {
      STAGING: ACANDROIDSTAGING,
      PRODUCTION: ACANDROIDPRODUCTION
    },
  });

export const CodePushDeploymentKey = isBetaUser ? CodePushKeys.STAGING : CodePushKeys.PRODUCTION;