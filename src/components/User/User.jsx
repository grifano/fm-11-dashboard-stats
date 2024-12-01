import styles from "./User.module.css";

import userPhotoMobile1x from "../../images/user-mobile.png?w=64&h=64&webp";
import userPhotoMobile2x from "../../images/user-mobile.png?w=128&h=128&webp";
import userPhotoMobile3x from "../../images/user-mobile.png?w=192&h=192&webp";

import userPhotoDesktop1x from "../../images/user-desktop.png?w=78&h=78&webp";
import userPhotoDesktop2x from "../../images/user-desktop.png?w=156&h=156&webp";
import userPhotoDesktop3x from "../../images/user-desktop.png?w=234&h=234&webp";

function User() {
  return (
    <div className={styles.user}>
      <picture>
        {/* Desktop: 78x78 (1x), 156x156 (2x), 234x234 (3x) */}
        <source
          srcSet={`${userPhotoDesktop1x} 1x, ${userPhotoDesktop2x} 2x, ${userPhotoDesktop3x} 3x`}
          media="(min-width: 768px)" // For devices wider than 768px
          type="image/webp"
        />

        {/* Mobile: 64x64 (1x), 128x128 (2x), 192x192 (3x) */}
        <source
          srcSet={`${userPhotoMobile1x} 1x, ${userPhotoMobile2x} 2x, ${userPhotoMobile3x} 3x`}
          media="(max-width: 767px)" // For devices narrower than 768px
          type="image/webp"
        />

        {/* Fallback <img> for unsupported browsers */}
        <img
          src={userPhotoMobile1x}
          srcSet={`${userPhotoMobile2x} 2x, ${userPhotoMobile3x} 3x`}
          alt="User Photo"
          width="78" // Base width for mobile
          height="78"
        />
      </picture>
      <p className={styles.user__title}>Report for</p>
      <p className={styles.user__name}>Jeremy Robson</p>
    </div>
  );
}

export default User;
