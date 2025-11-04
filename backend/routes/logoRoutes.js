import express from 'express';
import cloudinary from 'cloudinary'; 
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

/**
 * @route GET /api/company-logos
 * @desc Fetches ONLY Company logos from internsaathi_uploads using a naming filter.
 * @access Public
 */
router.get('/company-logos', async (req, res) => {
  const logoFolderPath = process.env.CLOUDINARY_LOGO_FOLDER || 'internsaathi_uploads'; 

  try {
    // 1. Query Cloudinary for assets in the folder that start with 'company_logo'
    const searchExpression = `folder:${logoFolderPath} AND public_id:company_logo*`;
    
    const result = await cloudinary.v2.search
      .expression(searchExpression) 
      .max_results(50) 
      .execute();

    // 2. Extract the secure public URL
    const logoUrls = result.resources
        .filter(resource => resource.resource_type === 'image')
        .map(resource => resource.secure_url);

    res.json(logoUrls); 

  } catch (error) {
    console.error('Cloudinary Logo Fetch Error:', error);
    res.status(500).json({ message: 'Failed to retrieve company logos.' });
  }
});

export default router;