import prisma from '../../lib/prisma'

export default async function (req, res) {
  console.log(req.body)
  if (req.method === 'POST') {
    const { firstName, email } = req.body

    const result = await prisma.user.create({
      data: {
        firstName,
        email
      }
    })

    res.json(result)
  }
}
