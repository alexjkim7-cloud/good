/** @type {import('next').NextConfig} */
const nextConfig = {
    // 'fs' 옵션을 설정하여 Webpack의 감시 대상에서 특정 경로를 제외합니다.
    // 이 경로는 Watchpack이 사용합니다.
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // 클라이언트 측(브라우저 번들링)에서는 제외하지 않아도 되지만,
            // 안전을 위해 추가할 수 있습니다.
        }

        // Watchpack의 감시 목록에서 C:\swapfile.sys를 명시적으로 제외합니다.
        // 이는 파일 시스템 감시 설정(watchOptions)에 반영됩니다.
        // Windows 경로를 정규식이나 문자열로 정확히 제외해야 합니다.
        config.watchOptions = {
            ignored: [
                '**/node_modules/**',
                '**/*swapfile.sys', // C:\swapfile.sys를 무시
                // 필요하다면 다른 시스템 파일도 추가 가능
            ],
        };

        return config;
    },
};

export default nextConfig;
