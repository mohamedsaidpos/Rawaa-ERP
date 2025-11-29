module.exports = {
  appId: 'com.rawaa.erp',
  productName: 'رُواء - Rawaa ERP',
  directories: {
    output: 'release',
    buildResources: 'assets',
  },
  files: ['dist/**/*', 'package.json'],
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
      {
        target: 'portable',
        arch: ['x64'],
      },
    ],
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: 'Rawaa ERP',
    installerIcon: 'assets/icon.ico',
    uninstallerIcon: 'assets/icon.ico',
  },
  portable: {
    artifactName: '${productName}-${version}.exe',
  },
};
