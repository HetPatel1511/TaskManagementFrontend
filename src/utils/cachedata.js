import fs from "fs";
import { hashCode } from "utils/helpers";

const CACHE_DIR = './cache'; 

export const getDataFromCache = (cacheFileFullPath) => {
    if (fs.existsSync(cacheFileFullPath)) {
        const cacheData = fs.readFileSync(cacheFileFullPath, 'utf-8');
        const parsedCacheData = JSON.parse(cacheData);
        if (parsedCacheData.expiration > Date.now()) {
            return parsedCacheData.data;
        }
    }
    return null;
};

export const fetchAndCacheData = async (cacheFilePath, fetchFunction, cacheExpirationMinutes) => {
 
    var cacheFileName = cacheFilePath.replaceAll("/", "-");
    cacheFileName = cacheFileName.length > 100 ? hashCode(cacheFileName) : cacheFileName;

    let cacheFileFullPath = `${CACHE_DIR}/${cacheFileName.toLowerCase()}.json`
    let data = getDataFromCache(cacheFileFullPath);
    
    if (!fs.existsSync(CACHE_DIR)) {
        fs.mkdirSync(CACHE_DIR);
    }
    if (!data) {

        const response = await fetchFunction();
        data = response?.data || [];
        
        const cacheExpiration = Date.now() + cacheExpirationMinutes * 60 * 1000;
        const cacheObject = {
            data : data,
            expiration: cacheExpiration,
        };
        fs.writeFileSync(cacheFileFullPath, JSON.stringify(cacheObject), 'utf-8');
    }
    return data;

};