require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'react-native-notifications'
  s.version        = package['version']
  s.summary        = package['description']

  s.authors        = "Wix.com"
  s.homepage       = package['homepage']
  s.license        = package['license']
  s.platform       = :ios, '11.0'

  s.module_name    = 'RNNotifications'
  s.source         = { :git => 'https://github.com/wix/react-native-notifications', :tag => s.version }

  s.requires_arc   = true

  s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'notification.ios.js', 'notification.android.js', 'index.android.js', 'index.ios.js'
  s.source_files   = 'lib/ios/*.{h,m}'
  s.exclude_files  = "lib/ios/RNNotificationsTests/**/*.*", "lib/ios/OCMock/**/*.*"

  s.dependency 'React-Core'
end
