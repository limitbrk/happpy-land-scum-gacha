export class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private isEnabled: boolean = true;

  constructor() {
    // Check if audio is supported
    this.isEnabled = typeof Audio !== 'undefined';
  }

  preloadSound(key: string, url: string): void {
    if (!this.isEnabled) return;

    try {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = url;
      
      // Handle loading errors gracefully
      audio.addEventListener('error', () => {
        console.warn(`Failed to load sound: ${key} from ${url}`);
      });
      
      this.sounds.set(key, audio);
    } catch (error) {
      console.warn(`Error preloading sound ${key}:`, error);
    }
  }

  playSound(key: string, volume: number = 0.5): void {
    if (!this.isEnabled) return;

    const sound = this.sounds.get(key);
    if (sound) {
      try {
        sound.volume = Math.max(0, Math.min(1, volume));
        sound.currentTime = 0;
        
        // Play with user gesture handling
        const playPromise = sound.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silently handle autoplay restrictions
          });
        }
      } catch (error) {
        console.warn(`Error playing sound ${key}:`, error);
        // Silently handle any playback errors
      }
    }
  }

  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  isAudioEnabled(): boolean {
    return this.isEnabled;
  }
}

export const soundManager = new SoundManager();