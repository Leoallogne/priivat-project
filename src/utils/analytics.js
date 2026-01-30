import ReactGA from 'react-ga4'

// Ganti dengan Measurement ID Anda dari Google Analytics
// Format: G-XXXXXXXXXX
const MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const initGA = () => {
  try {
    // Hanya inisialisasi jika ID sudah diisi (bukan default)
    if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(MEASUREMENT_ID)
      console.log('Google Analytics Initialized')
    } else {
      console.warn('Google Analytics Measurement ID belum disetting di src/utils/analytics.js')
    }
  } catch (error) {
    console.error('Gagal inisialisasi GA:', error)
  }
}

export const trackPageView = () => {
  try {
    if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
    }
  } catch (error) {
    console.error('Gagal tracking pageview:', error)
  }
}

export const trackEvent = (category, action, label) => {
  try {
    if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.event({
        category,
        action,
        label
      })
      console.log(`Event Tracked: ${category} - ${action} - ${label}`)
    } else {
      console.log(`[DEV] Event: ${category} - ${action} - ${label}`)
    }
  } catch (error) {
    console.error('Gagal tracking event:', error)
  }
}
