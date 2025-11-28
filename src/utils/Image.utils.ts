export function normalizeImageUrl(rawImage: any, apiBaseUrl: string): string {
  let imageUrl = '';

  // Handle string that might be JSON array
  if (typeof rawImage === 'string' && rawImage.startsWith('[')) {
    try {
      rawImage = JSON.parse(rawImage);
    } catch {
      // Ignore parse errors
    }
  }

  // Extract path if array
  if (Array.isArray(rawImage)) {
    imageUrl = rawImage[0] || '';
  } else {
    imageUrl = String(rawImage);
  }

  // Clean and prefix
  if (imageUrl) {
    imageUrl = `${apiBaseUrl}/${imageUrl.replace(/\\/g, '/')}`;
  }

  return imageUrl;
}