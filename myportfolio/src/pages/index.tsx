
import { Link, ScrollButton } from "@portfoliods/react"

import "@portfoliods/scss/src/atoms/Link.scss"
import "@portfoliods/scss/src/atoms/ScrollButton.scss"
import "@portfoliods/scss/src/atoms/Arrow.scss"
import "@portfoliods/scss/src/global.scss"

export default function Home() {
  return (
    <>
      <Link fontSize={3} active={false} href='' text='About me' key={1} />
      <br />
      <ScrollButton></ScrollButton>
    </>
  )
}
