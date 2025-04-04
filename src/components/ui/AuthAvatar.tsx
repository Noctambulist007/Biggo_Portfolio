'use client';

import { useEffect, useState } from 'react';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/dropdown';

const AuthAvatar = () => {
  // Check if we're in static export mode
  const isStaticExport = process.env.NEXT_PUBLIC_OUTPUT_MODE === 'export' || 
                        typeof window !== 'undefined' && window.location.protocol === 'file:';
  
  // Always call useSession to follow React hooks rules
  const { data: session } = useSession();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    if (!isStaticExport && session?.user?.image) {
      setIsSignedIn(true);
      setAvatarUrl(session.user.image); // Set avatar URL from session
    } else {
      setIsSignedIn(false);
      setAvatarUrl(''); // Fallback to empty string
    }
  }, [session, isStaticExport]);

  const handleSignIn = () => {
    if (!isStaticExport) {
      signIn('github'); // Trigger GitHub OAuth
    } else {
      console.log('Authentication is disabled in static export mode');
    }
  };

  const handleSignOut = () => {
    if (!isStaticExport) {
      signOut(); // Sign out the user
      Cookies.remove('auth'); // Clear auth cookie
    }
    setIsSignedIn(false);
    setAvatarUrl(''); // Reset avatar URL
  };

  // In static export mode, show a simplified button
  if (isStaticExport) {
    return (
      <Button
        color="primary"
        className="cursor-pointer bg-black text-white dark:bg-white dark:text-black"
        as="a"
        href="https://github.com/Biggo111/portfolio" 
        target="_blank"
      >
        GitHub
      </Button>
    );
  }

  return (
    <>
      {!isSignedIn ? (
        <Button
          color="primary"
          onPress={handleSignIn}
          className="cursor-pointer bg-black text-white dark:bg-white dark:text-black"
        >
          Sign In
        </Button>
      ) : (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              color="primary"
              src={avatarUrl}
              className="cursor-pointer h-8 w-8"
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="User settings">
            <DropdownItem
              key="signOut"
              className="text-danger"
              color="danger"
              onPress={handleSignOut}
            >
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
};

export default AuthAvatar;
