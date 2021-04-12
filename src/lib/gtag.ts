export const GA_TRACKING_ID = 'G-6LD4EQCEHC';

export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
