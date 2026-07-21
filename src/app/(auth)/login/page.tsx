export default function Login() {
	return (
		<div className='border rounded-2xl bg-white m-4 p-8 min-h-1/3 w-2/3'>
			<div>
				<h6 className='text-4xl font-smibold'>Welcome Back</h6>
				<p className='text-black/60 pt-2'>
					Sign in to access your retirement plan
				</p>
			</div>
			<form className='my-6'>
				<div className='flex flex-col mb-2'>
					<label className='mb-1'>Email</label>
					<input
						type='email'
						className='bg-gray-100 rounded-xs py-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6'
					/>
				</div>
				<div className='flex flex-col mb-2'>
					<label className='mb-1'>Password</label>
					<input
						type='password'
						className='bg-gray-100 rounded-xs py-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6'
					/>
				</div>
				<button type='submit'>Sign in</button>
			</form>
		</div>
	)
}
