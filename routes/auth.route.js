const { Router } = require('express')
const router = Router()
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const bcrypter = require('bcrypt')
const jwt = require('jsonwebtoken')

//reg
router.post('/registration',
    [
        check('email', 'Некорректный e-mail').isEmail(),
        check('password', 'Некорректный пароль').isLength({ min: 6})
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные для регистрации.'
                })
            }

            const { email, password } = req.body

            const isUsed = await User.findOne({ email })

            if (isUsed) {
                return res.status(300).json({ message: 'Данный email занят.' })
            }

            const hashedPassword = await bcrypter.hash(password, 12)

            const user = new User({
                email, password : hashedPassword
            })
            await user.save()
            
            res.status(201).json({ message: 'Пользователь создан' })
        }
         catch (error) {
            console.log(error)
        }
    })

//login
    router.post('/login',
    [
        check('email', 'Некорректный e-mail').isEmail(),
        check('password', 'Некорректный пароль').exists()
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные для входа.'
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message:'Данный пользователь не зарегистрирован'})
            }

            const isMatch = bcrypter.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message:'Пароли не совпадают'})
            }

            const jwtSecret = '3456ujsdfhsdvh4jvs;er897tg'

            const token = jwt.sign(
                {
                    userId: user.id,
                },
                jwtSecret,
                {
                    expiresIn: '1h'
                }
            )

            
            res.json({token, userId: user.id})
        }
         catch (error) {
            console.log(error)
        }
    })

module.exports = router