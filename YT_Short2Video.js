javascript: 

function Short2Video(url) {
    const shortUrl = url.toLowerCase();
    if (!shortUrl.includes("/shorts/") || !shortUrl.includes("youtube")) {
        return;
    }

    const videoId = shortUrl.split("/").findLast(() => true);
    window.location.href = `https://www.youtube.com/watch?v=${videoId}`
};
Short2Video(window.location.href);