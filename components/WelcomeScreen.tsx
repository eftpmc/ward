import Step from './Step'
import Link from 'next/link'

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-4xl mb-4 text-center">Welcome to Ward</h2>

      <p className="text-center">
        Discover the easiest way to manage your wardrobe, create outfits, and explore fashion trends.
      </p>

      <ol className="flex flex-col gap-6 mt-6">
        <Step title="Sign Up and Explore">
          <p>
            Get started by creating your own account. It's quick and easy!
            <Link href="/signup">
              <span className="font-bold hover:underline text-foreground/80 ml-2 cursor-pointer">
                Sign Up
              </span>
            </Link>
          </p>
        </Step>

        <Step title="Organize Your Wardrobe">
          <p>
            Easily add and organize your clothing items in our digital wardrobe.
          </p>
        </Step>

        <Step title="Create and Plan Outfits">
          <p>
            Mix and match your clothes to create outfits for any occasion.
          </p>
        </Step>

        <Step title="Connect with the Community">
          <p>
            Share your styles and get inspired by the community.
          </p>
        </Step>
      </ol>

      <div className="text-center mt-6">
        Already have an account? 
        <Link href="/login">
          <span className="font-bold hover:underline text-foreground/80 ml-2 cursor-pointer">
            Log In
          </span>
        </Link>
      </div>
    </div>
  )
}
