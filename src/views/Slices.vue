<template>
  <div id="container">
    <div class="header">
      <img
        class="app-icon"
        :src="require(`../assets/AppleSlicesLightMode.svg`)"
      />
      <div class="header-text">
        <h1 class="title">Slices - A MacOS Window Manager</h1>
        <p class="subtitle">
          A native MacOS application that allows a user to quickly snap windows
          into various layouts using keyboard shortcuts, a drag interface, or
          menu bar buttons.
        </p>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Latest Release</h2>
      <div class="release-box">
        <div class="release-info">
          <div class="release-version">Latest Version Download</div>
          <div class="release-date">
            For more releases and information, see the <a href="https://github.com/ArcticEH/SlicesVersion">GitHub repository</a>.
          </div>
        </div>
        <a
          href="https://github.com/ArcticEH/SlicesVersion/releases/download/latest/Slices-Installer.dmg"
          class="download-button"
          >Download .dmg</a
        >
      </div>
      <p class="release-notes">
        Initial public beta release. Please report any bugs or feature requests
        on the
        <a href="https://github.com/ArcticEH/SlicesVersion/issues"
          >GitHub issues page</a
        >.
      </p>
    </div>

    <div class="section">
      <h2 class="section-title">About the App</h2>
      <p>
      Slices was engineered to solve a fundamental problem: inefficient window management on macOS. For too long, Mac users have lacked a truly customizable solution that combines precise layout control with fluid keyboard shortcuts and an intuitive drag interface. Slices revolutionizes window management on macOS.
      </p>
      <p>
        Built with Swift and SwiftUI, it's a modern application designed to be
        both powerful and easy to use.
      </p>
    </div>

    <div class="section">
      <h2 class="section-title">Screenshots</h2>
      <div class="screenshots-container">
        <figure class="screenshot-figure full-screenshot">
          <img src="../assets/SlicesScreenshot2.png" alt="Slices Layout Editor" class="screenshot-image">
          <figcaption>The Layout Editor</figcaption>
        </figure>
        <figure class="screenshot-figure full-screenshot">
          <img src="../assets/SlicesScreenshot3.png" alt="Slices Drag to Zone" class="screenshot-image">
          <figcaption>Drag to Zone</figcaption>
        </figure>
        <figure class="screenshot-figure menu-screenshot">
          <img src="../assets/SlicesScreenshot1.png" alt="Slices Menu Bar" class="screenshot-image">
          <figcaption>The Menu Bar</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
#container {
  margin-top: 64px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
}

.app-icon {
  width: 128px;
  height: 128px;
  margin-right: 24px;
  border: 2px solid white;
  border-radius: 15px;
}

.title {
  font-size: 40px;
  margin: 0;
}

.subtitle {
  font-size: 18px;
  color: #b0b0b0;
}

.section {
  margin-bottom: 48px;
}

.section-title {
  border-bottom: 2px solid #39ace7;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.release-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 16px;
  border-radius: 8px;
}

.download-button {
  background-color: #39ace7;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #2a8dbf;
}

.release-notes {
  margin-top: 12px;
  font-style: italic;
  color: #b0b0b0;
}

a {
  color: #39ace7;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.screenshots-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.screenshot-figure {
  margin: 0;
  text-align: center;
}

.screenshot-figure figcaption {
  margin-top: 8px;
  font-size: 14px;
  color: #b0b0b0;
}

.screenshot-image {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #444;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-screenshot {
  grid-column: 1 / -1; /* Span full width */
  justify-self: center; /* Center the item in the grid area */
  width: 50%; /* Or a fixed width like max-width: 400px; */
  min-width: 300px;
  justify-self: center;
  width: 100%;
  max-width: 400px;
}

@media (max-width: 768px) {
  .screenshots-container {
    grid-template-columns: 1fr;
  }
  .menu-screenshot {
    max-width: 100%;
  }
}

.screenshot-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

</style>
