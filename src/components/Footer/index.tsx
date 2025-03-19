import { MenuItem } from '@/types/types';
import { MenuFooter } from '@/utils/URL';
import {
  _address,
  _googleLink,
  _mail,
  _phone
} from '@/utils/constants';
import { formatPhoneNumber } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { LocateIcon } from '../UI/SVG/LocateIcon';
import { MailIcon } from '../UI/SVG/MailIcon';
import { PhoneIcon } from '../UI/SVG/PhoneIcon';
import { Socials } from '../UI/Socials';
const Footer = () => {
  const menuColumns = MenuFooter.reduce<MenuItem[][]>(
    (acc, menuItem, index) => {
      const columnIndex = Math.floor(index / 4);
      if (!acc[columnIndex]) {
        acc[columnIndex] = [];
      }
      acc[columnIndex].push(menuItem);
      return acc;
    },
    []
  );

  return (
    <footer>
      <div className=" bg-goGreen-mint py-[80px]">
        {' '}
        <div className="container">
          <Link href="/" title="Go to Home">
            <Image
              src="/images/logo.svg"
              width={210}
              height={30}
              alt="GoGreen"
            />
          </Link>
          <div className="flex justify-between flex-wrap gap-11 md:gap-4 mt-9">
            <div className="grid sm:grid-cols-2 gap-7">
              {menuColumns.map((column, index) => (
                <nav key={index} className=" space-y-6 flex flex-col">
                  {column.map((menuItem, itemIndex) => (
                    <Link
                      key={itemIndex}
                      className={` whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green `}
                      href={menuItem.link || '#'}
                    >
                      {menuItem.title}
                    </Link>
                  ))}
                  {index === menuColumns.length - 1 && (
                    <div className=" text-goGreen-green">
                      <p className=" font-black mb-5 font-Avenir uppercase">
                        Business Hours:
                      </p>
                      <p>
                        9:00 AM – 7:00 PM <br /> Monday to Friday
                      </p>
                    </div>
                  )}
                </nav>
              ))}
            </div>
            <nav className=" space-y-9 flex flex-col">
              <li className="flex items-center gap-[30px]">
                <MailIcon width={28} height={20} />

                <Link
                  href={`mailto:${_mail}`}
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_mail}`}</Link>
              </li>
              <li className="flex items-center gap-[30px]">
                <PhoneIcon width={28} height={28} />

                <Link
                  href={`tel:${formatPhoneNumber(_phone)}`}
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_phone}`}</Link>
              </li>
              <li className="flex items-center gap-[30px]">
                <LocateIcon width={28} height={37} />

                <Link
                  href={_googleLink}
                  target="_blank"
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_address}`}</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-goGreen-black py-[14px]" id="footer_bottom">
        <div className="container">
          <div className="flex justify-between items-center max-md:flex-col gap-4">
            {' '}
            <p className="text-white text-center ">
              Copyright 2024 © GoGreen. Full-stack web application
            </p>
            <div className="flex gap-4 items-center justify-around sm:justify-end">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};   

export default Footer;
