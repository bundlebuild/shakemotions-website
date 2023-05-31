import * as React from 'react'
import './header.css';

const Header: React.FC = () => {
  return (
    <div className="sm-header">
      <a
        href="/"
        aria-current="page"
        className="shakemotions-logo-link w-inline-block w--current"
      >
        <div
          className="shakemotions-logo snappy w-embed"
        >
          <svg width="172" height="100" viewBox="0 0 172 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="122" cy="50" r="49.5" stroke="white" />
            <path d="M7.32735 58.308C6.16869 58.308 5.14202 58.1027 4.24735 57.692C3.35269 57.2813 2.64869 56.68 2.13535 55.888C1.63668 55.0813 1.38735 54.106 1.38735 52.962V52.412H3.74135V52.962C3.74135 54.0473 4.06402 54.8613 4.70935 55.404C5.36935 55.9467 6.24202 56.218 7.32735 56.218C8.42735 56.218 9.25602 55.9907 9.81335 55.536C10.3707 55.0667 10.6494 54.4653 10.6494 53.732C10.6494 53.248 10.5174 52.852 10.2534 52.544C9.98935 52.236 9.61535 51.994 9.13135 51.818C8.64735 51.6273 8.06802 51.4513 7.39335 51.29L6.57935 51.092C5.59669 50.8573 4.73869 50.5713 4.00535 50.234C3.28669 49.882 2.72935 49.42 2.33335 48.848C1.93735 48.276 1.73935 47.5427 1.73935 46.648C1.73935 45.7387 1.95935 44.9613 2.39935 44.316C2.85402 43.6707 3.47735 43.172 4.26935 42.82C5.06135 42.468 5.99269 42.292 7.06335 42.292C8.13402 42.292 9.08735 42.4753 9.92335 42.842C10.774 43.2087 11.4414 43.7513 11.9254 44.47C12.4094 45.1887 12.6514 46.0907 12.6514 47.176V47.968H10.2974V47.176C10.2974 46.516 10.158 45.9807 9.87935 45.57C9.61535 45.1593 9.24135 44.8587 8.75735 44.668C8.27335 44.4773 7.70869 44.382 7.06335 44.382C6.12469 44.382 5.39135 44.58 4.86335 44.976C4.35002 45.3573 4.09335 45.8927 4.09335 46.582C4.09335 47.0513 4.20335 47.44 4.42335 47.748C4.65802 48.0413 4.99535 48.2833 5.43535 48.474C5.87535 48.6647 6.42535 48.8333 7.08535 48.98L7.89935 49.178C8.89669 49.398 9.77669 49.684 10.5394 50.036C11.302 50.3733 11.9034 50.8353 12.3434 51.422C12.7834 52.0087 13.0034 52.764 13.0034 53.688C13.0034 54.612 12.7687 55.4187 12.2994 56.108C11.8447 56.7973 11.192 57.34 10.3414 57.736C9.49069 58.1173 8.48602 58.308 7.32735 58.308ZM15.4976 58V42.6H17.8736V49.2H24.3416V42.6H26.7176V58H24.3416V51.356H17.8736V58H15.4976ZM28.7911 58L33.1911 42.6H37.3711L41.7491 58H39.3071L38.2951 54.37H32.2671L31.2551 58H28.7911ZM32.8611 52.17H37.7011L35.4571 44.074H35.1051L32.8611 52.17ZM43.8355 58V42.6H46.2115V49.002H46.5635L52.3055 42.6H55.4075L48.4555 50.19L55.6495 58H52.4595L46.5635 51.466H46.2115V58H43.8355ZM57.4351 58V42.6H67.1371V44.756H59.8111V49.178H66.5211V51.334H59.8111V55.844H67.2471V58H57.4351ZM75.3316 58V42.6H79.7976L83.1636 56.416H83.5156L86.8816 42.6H91.3476V58H89.0376V44.272H88.6856L85.3416 58H81.3376L77.9936 44.272H77.6416V58H75.3316ZM100.346 58.308C98.4541 58.308 96.9508 57.78 95.8361 56.724C94.7214 55.6533 94.1641 54.1133 94.1641 52.104V48.496C94.1641 46.4867 94.7214 44.954 95.8361 43.898C96.9508 42.8273 98.4541 42.292 100.346 42.292C102.238 42.292 103.741 42.8273 104.856 43.898C105.985 44.954 106.55 46.4867 106.55 48.496V52.104C106.55 54.1133 105.985 55.6533 104.856 56.724C103.741 57.78 102.238 58.308 100.346 58.308ZM100.346 56.174C101.563 56.174 102.502 55.822 103.162 55.118C103.822 54.3993 104.152 53.424 104.152 52.192V48.408C104.152 47.176 103.822 46.208 103.162 45.504C102.502 44.7853 101.563 44.426 100.346 44.426C99.1581 44.426 98.2268 44.7853 97.5521 45.504C96.8774 46.208 96.5401 47.176 96.5401 48.408V52.192C96.5401 53.424 96.8774 54.3993 97.5521 55.118C98.2268 55.822 99.1581 56.174 100.346 56.174ZM112.392 58V44.756H107.662V42.6H119.498V44.756H114.768V58H112.392ZM121.652 58V42.6H124.028V58H121.652ZM133.024 58.308C131.132 58.308 129.629 57.78 128.514 56.724C127.399 55.6533 126.842 54.1133 126.842 52.104V48.496C126.842 46.4867 127.399 44.954 128.514 43.898C129.629 42.8273 131.132 42.292 133.024 42.292C134.916 42.292 136.419 42.8273 137.534 43.898C138.663 44.954 139.228 46.4867 139.228 48.496V52.104C139.228 54.1133 138.663 55.6533 137.534 56.724C136.419 57.78 134.916 58.308 133.024 58.308ZM133.024 56.174C134.241 56.174 135.18 55.822 135.84 55.118C136.5 54.3993 136.83 53.424 136.83 52.192V48.408C136.83 47.176 136.5 46.208 135.84 45.504C135.18 44.7853 134.241 44.426 133.024 44.426C131.836 44.426 130.905 44.7853 130.23 45.504C129.555 46.208 129.218 47.176 129.218 48.408V52.192C129.218 53.424 129.555 54.3993 130.23 55.118C130.905 55.822 131.836 56.174 133.024 56.174ZM142.041 58V42.6H146.617L150.797 56.416H151.149V42.6H153.503V58H148.927L144.747 44.162H144.395V58H142.041ZM161.95 58.308C160.792 58.308 159.765 58.1027 158.87 57.692C157.976 57.2813 157.272 56.68 156.758 55.888C156.26 55.0813 156.01 54.106 156.01 52.962V52.412H158.364V52.962C158.364 54.0473 158.687 54.8613 159.332 55.404C159.992 55.9467 160.865 56.218 161.95 56.218C163.05 56.218 163.879 55.9907 164.436 55.536C164.994 55.0667 165.272 54.4653 165.272 53.732C165.272 53.248 165.14 52.852 164.876 52.544C164.612 52.236 164.238 51.994 163.754 51.818C163.27 51.6273 162.691 51.4513 162.016 51.29L161.202 51.092C160.22 50.8573 159.362 50.5713 158.628 50.234C157.91 49.882 157.352 49.42 156.956 48.848C156.56 48.276 156.362 47.5427 156.362 46.648C156.362 45.7387 156.582 44.9613 157.022 44.316C157.477 43.6707 158.1 43.172 158.892 42.82C159.684 42.468 160.616 42.292 161.686 42.292C162.757 42.292 163.71 42.4753 164.546 42.842C165.397 43.2087 166.064 43.7513 166.548 44.47C167.032 45.1887 167.274 46.0907 167.274 47.176V47.968H164.92V47.176C164.92 46.516 164.781 45.9807 164.502 45.57C164.238 45.1593 163.864 44.8587 163.38 44.668C162.896 44.4773 162.332 44.382 161.686 44.382C160.748 44.382 160.014 44.58 159.486 44.976C158.973 45.3573 158.716 45.8927 158.716 46.582C158.716 47.0513 158.826 47.44 159.046 47.748C159.281 48.0413 159.618 48.2833 160.058 48.474C160.498 48.6647 161.048 48.8333 161.708 48.98L162.522 49.178C163.52 49.398 164.4 49.684 165.162 50.036C165.925 50.3733 166.526 50.8353 166.966 51.422C167.406 52.0087 167.626 52.764 167.626 53.688C167.626 54.612 167.392 55.4187 166.922 56.108C166.468 56.7973 165.815 57.34 164.964 57.736C164.114 58.1173 163.109 58.308 161.95 58.308Z" fill="white" />
          </svg>
        </div>
      </a>

      <div className="header-menu only-desktop">
        <a href="#howto" className="header-menu-item w-inline-block">
          <div>how it works</div>
        </a>
        <a href="#examples" className="header-menu-item w-inline-block">
          <div>examples</div>
        </a>
        <a href="#works" className="header-menu-item w-inline-block">
          <div>our works</div>
        </a>
        <a href="#faq" className="header-menu-item w-inline-block">
          <div>FAQ</div>
        </a>
      </div>

      <div className="hero-auth-group">
        <a
          href="https://calendly.com/ayubusiness69/let-s-discuss"
          className="btn-link w-inline-block"
        >
          <div className="btn-embed w-embed">
            <button
              className="btn primary"
            >
              <span className="btn-contents">
                <span className="btn-text">Book an Intro Call</span>
              </span>
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header;
