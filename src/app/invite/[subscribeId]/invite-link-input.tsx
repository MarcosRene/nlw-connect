'use client'

import { IconButton } from '@/components/icon-button'
import { InputControl, InputPrefix, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInvateLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputPrefix>
        <Link className="size-5" />
      </InputPrefix>
      <InputControl defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2" onClick={copyInvateLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
