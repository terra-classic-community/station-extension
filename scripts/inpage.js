// legacy terra webapps
window.isTerraExtensionAvailable = true
// new inetchain webapps
window.isStationExtensionAvailable = true

// ---------------------------------------------
// for multiple extension support
// ---------------------------------------------
const STATION_INFO = {
  name: "Terra Classic Station Wallet",
  identifier: "terra-classic-station",
  icon: "https://assets.terrarebels.net/icon/station-extension/icon.png",
}

if (
  typeof window.terraWallets !== "undefined" &&
  Array.isArray(window.terraWallets)
) {
  window.terraWallets.push(STATION_INFO)
} else {
  window.terraWallets = [STATION_INFO]
}

if (
  typeof window.interchainWallets !== "undefined" &&
  Array.isArray(window.interchainWallets)
) {
  window.interchainWallets.push(STATION_INFO)
} else {
  window.interchainWallets = [STATION_INFO]
}
