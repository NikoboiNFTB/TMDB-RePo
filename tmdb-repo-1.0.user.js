// ==UserScript==
// @name         TMDB RePo: Simple and Fast Redirect Portal
// @namespace    https://github.com/NikoboiNFTB/TMDB-RePo
// @version      1.0
// @author       Nikoboi
// @description  Adds 111movies links to movies, shows, and season episodes on TMDB.
// @icon         https://www.themoviedb.org/assets/2/apple-touch-icon-57ed4b3b0450fd5e9a0c20f34e814b82adaa1085c79bdde2f00ca8787b63d2c4.png
// @match        https://www.themoviedb.org/movie/*
// @match        https://www.themoviedb.org/tv/*
// @match        https://www.themoviedb.org/tv/*/season/*
// @match        https://www.themoviedb.org/tv/*/season/*/episode/*
// @run-at       document-idle
// ==/UserScript==

(function() {
    "use strict";

    function getIdsFromUrl(path) {
        const parts = path.split("/").filter(Boolean);

        if (parts[0] === "movie" && parts[1]) {
            return { type: "movie", movieId: parts[1].split("-")[0] };
        }

        if (parts[0] === "tv" && parts[1]) {
            const showId = parts[1].split("-")[0];
            const seasonIndex = parts.indexOf("season");
            const episodeIndex = parts.indexOf("episode");

            if (seasonIndex !== -1 && episodeIndex !== -1) {
                return {
                    type: "episode",
                    showId: showId,
                    season: parts[seasonIndex + 1],
                    episode: parts[episodeIndex + 1]
                };
            }

            if (seasonIndex !== -1) {
                return {
                    type: "season",
                    showId: showId,
                    season: parts[seasonIndex + 1]
                };
            }

            return { type: "tv", showId: showId };
        }

        return null;
    }

    function buildLink(info) {
        if (!info) return null;

        if (info.type === "movie") {
            return `https://111movies.com/movie/${info.movieId}`;
        }

        if (info.type === "tv") {
            return `https://111movies.com/tv/${info.showId}/1/1`;
        }

        if (info.type === "season") {
            return null;
        }

        if (info.type === "episode") {
            return `https://111movies.com/tv/${info.showId}/${info.season}/${info.episode}`;
        }

        return null;
    }

    function createWatchA(url) {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = " Watch";
        a.className = "__repopo_watch";
        return a;
    }

    function addToMovieOrShowPage() {
        const path = window.location.pathname;
        const info = getIdsFromUrl(path);

        if (!info || info.type === "episode" || info.type === "season") return;
        if (document.querySelector("a.__repopo_watch")) return;

        const link = buildLink(info);
        if (!link) return;

        const ul = document.querySelector("ul.auto.actions");
        if (!ul) return;

        const li = document.createElement("li");
        const a = createWatchA(link);

        li.appendChild(a);
        ul.appendChild(li);
    }

    function addToSeasonEpisodes() {
        document.querySelectorAll(".episode .episode_title").forEach(block => {
            if (block.querySelector("a.__repopo_watch")) return;

            const h3a = block.querySelector("h3 a[href]");
            if (!h3a) return;

            const info = getIdsFromUrl(h3a.getAttribute("href"));
            if (!info || info.type !== "episode") return;

            const link = buildLink(info);
            if (!link) return;

            const a = createWatchA(link);

            const flex = block.querySelector(".flex");
            block.insertBefore(a, flex);
        });
    }

    function observerTick() {
        addToMovieOrShowPage();
        addToSeasonEpisodes();
    }

    const observer = new MutationObserver(observerTick);
    observer.observe(document.body, { childList: true, subtree: true });

    observerTick();
})();
