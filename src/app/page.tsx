import {Inter} from 'next/font/google'
import type {Metadata} from 'next'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Similarity API | Home',
	description: 'Free & open-source text similarity API'
}

const inter = Inter({subsets: ['latin']})

export default function Home() {
	return (
		<div className='relative h-screen flex items-center justify-center overflow-hidden'>
			<div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
				<div className='h-full gap-6 flex flex-col justify-start lg:justify-center  items-center lg:items-start'>
					<LargeHeading
						size='lg'
						className='three-d text-black dark:text-light-gold'
					>
						Easily determine <br /> text similarity.
					</LargeHeading>
					<Paragraph className='max-w-xl lg:text-left'>
						With the text similarity API, you can easily determine the
						similarity between two pieces of text with a free{' '}
						<Link
							href='/login'
							className='underline underline-offset-2 text-black dark:text-light-gold'
						>
							API key
						</Link>
						.
					</Paragraph>
					<div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
						<Image
							src='/typewriter.png'
							alt='typewriter'
							priority
							className='img-shadow'
							quality={100}
							style={{objectFit: 'contain'}}
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
