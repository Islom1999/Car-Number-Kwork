const {Router} = require('express')

const {
    getRegion,
    getRegionById,
    getRegionByIdNumbers,
} = require('../controls/apiControls')

const router = Router()

router.get('/region', getRegion)
router.get('/region/:id', getRegionById)
router.get('/region/:id/numbers', getRegionByIdNumbers)

module.exports = router









