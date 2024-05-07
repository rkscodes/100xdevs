import express from 'express'
import { authMiddleWare } from '../middleware.js'
import { Account } from '../db.js'

const accountRouter = express.Router()
accountRouter.use(authMiddleWare)

const transferSchema = zod.object({
	to: zod.string(),
	amount: zod.number()
})

accountRouter.get('/balance', async (req, res) => {
	const userBalance = await Account.findOne({
		userId: req.userID
	})

	if (userBalance) {
		res.json({
			balance: userBalance.balance
		})
	} else
		res.status(300).send('User not found or unauthenticated ')
})

accountRouter.post('/transfer', (req, res) => {
	const { success, error } = transferSchema.safeParse(req.body)
	if (error) {
		res.status(300).send('Invalid request format')
	}
	const transfer_to_user = req.body.to;
	const transfer_amount = req.body.amount;


	try {

	}
})

export { accountRouter }