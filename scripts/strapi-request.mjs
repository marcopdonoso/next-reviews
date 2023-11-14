import { writeFileSync } from 'node:fs'
import qs from 'qs'

const baseUrl = 'http://localhost:1337/api/reviews'
const query = qs.stringify(
	{
		fields: ['slug', 'title', 'subtitle', 'publishedAt'],
		populate: { image: { fields: ['url'] } },
		sort: ['publishedAt:desc'],
		pagination: { pageSize: 6, page: 1 },
	},
	{
		encodeValuesOnly: true,
	}
)
const response = await fetch(`${baseUrl}?${query}`)
const body = await response.json()
const formatted = JSON.stringify(body, null, 2)
const file = 'scripts/strapi-response.json'
writeFileSync(file, formatted, 'utf8')
