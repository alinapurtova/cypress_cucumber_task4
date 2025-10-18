import Page from "./Page";

class LivePersonPage extends Page {
  url = "customer-stories/liveperson";
  elements = {
    vimeoIframe: () => cy.get('iframe[src*="player.vimeo.com"]', { timeout: 10000 }),
  };

  open() {
    super.open(this.url);
  }

  verifyVideoPlayerVisible() {
    this.isElementVisible(this.elements.vimeoIframe);
  }

  clickVideoPlayer() {
    this.elements.vimeoIframe().scrollIntoView().click("center", { force: true });
  }
}

export default new LivePersonPage();