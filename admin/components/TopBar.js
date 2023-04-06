import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {  PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Language from './language'
import ConnectWallet from './wallet'
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-b from-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-0">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Crosss.art</span>
            <picture>
                <img
                  className="h-14 w-auto"
                  src="https://crosss.art/assets/img/logo-white.png"
                  alt=""
                />
              </picture>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 pl-14">
            <a href="#" className="text-sm font-bold leading-6 text-white">
                LATEST DROPS
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-white">
                COLLECTIONS
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-white">
                MARKETPLACE
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-white">
                SAFT
            </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end leading">
            <a href="#" className="text-sm font-bold leading-6 text-white px-2 pt-2 text-[20px]">
                <FaTelegramPlane />
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-white px-2 pt-2 text-[20px]">
                <AiOutlineTwitter /> 
            </a>
            <a href="#" className="text-sm font-bold leading-6 text-white px-2 pt-2 text-[20px]">
                <BsDiscord />
            </a>
            <ConnectWallet />
            <a href="#" className="text-sm font-bold leading-6 text-white bg-secondary rounded h-8 px-3 leading-8 mx-4">
                MEMBERSHIP
            </a>
            <Language />

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <picture>
                <img
                  className="h-8 w-auto"
                  src="https://crosss.art/assets/img/logo-white.png"
                  alt=""
                />
              </picture>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 grid">
                    <a href="#" className="text-sm font-bold leading-6 text-white">
                         LATEST DROPS
                    </a>
                    <a href="#" className="text-sm font-bold leading-6 text-white">
                        COLLECTIONS
                    </a>
                    <a href="#" className="text-sm font-bold leading-6 text-white">
                         MARKETPLACE
                    </a>
                </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
