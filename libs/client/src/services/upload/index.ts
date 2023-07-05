import { api } from '../../axios';
import { UploadApiResponse } from 'cloudinary';

export const uploadFile = async (file: FormData): Promise<UploadApiResponse> =>
  await api.post('/upload', file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
