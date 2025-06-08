import {createAvatar} from '@dicebear/core';
import {botttsNeutral, initials} from '@dicebear/collection';

import { cn } from '@/lib/utils';
import { Avatar, AvatarImage , AvatarFallback} from '@/components/ui/avatar';


interface GeneratedAvatarProps {

    seed: string;
    className?: string;
    variant?: 'botttsNeutral' | 'initials';
}

export const GeneratedAvatar = ({
    seed,
    className,
    variant = 'botttsNeutral',
}: GeneratedAvatarProps) => {
    let avatarSvg;

    if (variant === 'botttsNeutral') {
        avatarSvg = createAvatar(botttsNeutral, {
            seed,
            
        });
    } else if (variant === 'initials') {
        avatarSvg = createAvatar(initials, {
            seed,
            fontWeight: 500,
            fontSize: 42,
        });
    } else {
        throw new Error(`Unsupported variant: ${variant}`);
    }

    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={avatarSvg.toDataUri()} alt="Avatar" />
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
}