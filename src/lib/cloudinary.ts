interface CloudinaryResponse {
    secure_url: string;
    public_id: string;
  }
  
  export async function uploadToCloudinary(base64Image: string): Promise<CloudinaryResponse> {
    try {
      const response = await fetch('/api/cloudinary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64Image }),
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const data = await response.json();
      return {
        secure_url: data.secure_url,
        public_id: data.public_id,
      };
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  }
    