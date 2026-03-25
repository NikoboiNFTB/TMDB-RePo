# TMDb RePo: Simple & Fast Redirect Portal

> > This project is technically a port of [IMDb RePo](https://github.com/NikoboiNFTB/IMDb-RePo).

Simple and Fast Redirect Portal, adds quick and easy way to access your favorite movies and TV-shows directly from the TMDb website.

## Description

**TMDb RePo** is a lightweight, dependency-free userscript that adds links to movie, TV and Season pages for instant redirection to external streaming. Simple, fast, and smooth — Sailing the High Seas done right!

### Features

- One-Click Redirects
- Automatically finds the ID and constructs the link!
  - On Movie pages → `https://111movies.com/movie/{TMDB-ID}`
  - On TV Show pages → `htps://111movies.com/tv/{TMDB-ID}/1/1`
  - On Season pages → `https://111movies.com/tv/{TMDB-ID}/S/E`
- Lightweight, dependency-free and portable! Works on most browsers!

## Installation

### 1. Install a Userscript Manager

- Recommended: Firefox + Violentmonkey
  - Fully Free and Open-Source, simpler setup, install screen shows notable permissions.
- [Violentmonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
- [Tampermonkey for Chromium](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### 2. Install the Script

- choose one way, listed most to least convenient:
  - Click [here](https://github.com/NikoboiNFTB/TMDB-RePo/raw/refs/heads/main/tmdb-repo.user.js) and install when prompted.
  - Copy-paste all code into a new userscript.
  - Or download the [`.user.js`](https://github.com/NikoboiNFTB/TMDB-RePo/blob/main/tmdb-repo.user.js) file manually and import it (why would you do this?).

### 3. Firefox users, you're done, enjoy!

### 4. Chromium users:

You will need to enable running scripts in Tampermonkey settings:

1. Go to `chrome://extensions/`
2. Click **Details** under Tampermonkey
3. Enable **“Allow access to file URLs”**, **“Allow User Scripts”** and **"Developer Mode"**, then hit **"Update"**
4. Re-open the TMDb tab. Reloading it wasn't enough in my testing.

## How To Use

1. Open any **Movie**, **TV Show** or **Season** page on TMDB.
2. A new button appears next to _Play trailer_, _Clip_ or _Featurette_ or in case of Season pages, next to the episode's _Title_;
   - **Watch** → Hit **Watch** to redirect to **111Movies**

### Where the buttons are

They are _tiny_!

#### Movie Pages

![Movies](/assets/movie.png)

#### TV Pages

![TV](/assets/tv.png)

#### Season Pages

![Season](/assets/season.png)

## **Recommended 111Movies Tweaks**

#### [`Remove Player Gradient`](https://github.com/NikoboiNFTB/IMDb-RePo/raw/refs/heads/main/111Movies/gradient.user.js)

- Removes the persistent shadow overlay on the player.

#### [`Hide Server`](https://github.com/NikoboiNFTB/IMDb-RePo/raw/refs/heads/main/111Movies/server.user.js)

- Hides the server button along with the rest of the Player UI.

#### [`Hide Cursor`](https://github.com/NikoboiNFTB/IMDb-RePo/raw/refs/heads/main/111Movies/cursor.user.js)

- Hides the cursor with the rest of the Player GUI when not hovering over player controls.
- Brute force, but works. Contributions for a more elegant solution are welcome.

#### [`Add Page Title`](https://github.com/NikoboiNFTB/IMDb-RePo/raw/refs/heads/main/111Movies/title.user.js)

- Add a page title based on IMDb ID.
- For example, the title `South Park (TV Series 1997– ) - IMDb` becomes `South Park (TV Series 1997– ) - 111Movies`.

#### [`Add Page Favicon`](https://github.com/NikoboiNFTB/IMDb-RePo/raw/refs/heads/main/111Movies/favicon.user.js)

- Fetches the 111Movies logo from [`https://111movies.com/assets/img/logo.png`](https://111movies.com/assets/img/logo.png)

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by [**Nikoboi**](https://github.com/NikoboiNFTB/)

Script logic fine-tuned using [**ChatGPT**](https://chatgpt.com/)

## License

This project is licensed under the GNU General Public License V3. See [LICENSE](/LICENSE) for details.

## Legal Disclaimer

TMDB RePo is a redirecting tool to a external content aggregator that scrapes publicly available sources from the internet. We do not host, upload, or store any copyrighted content on our servers. All videos, images, and links displayed on this site are gathered automatically from third-party websites. If you are a copyright owner and believe that any content found through IMDb RePo violates your rights, please be aware that we do not control or host any of the content. Any copyright infringement claims should be directed to the respective third-party sites where the content is hosted. For any DMCA takedown requests, please contact the original content provider or hosting website.

TMDB RePo is an independent project and is not affiliated with, endorsed by, or in any way connected to themoviedatabase.org or 111Movies.com. TMDb and 111Movies are trademarks of their respective owners, and all rights to these trademarks are acknowledged. The use of these names and references is for descriptive purposes only.
