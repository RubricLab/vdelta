import type { PlasmoCSConfig } from "plasmo"
import React, { useCallback, useEffect, useState } from "react"

import { highlightRows } from "~utils"

export const config: PlasmoCSConfig = {
  matches: ["https://vercel.com/*"]
}

/**
 * Highlight build log rows when the page is loaded.
 */
const Listener = () => {
  const [complete, setComplete] = useState(false)

  const targetElement = document.querySelector("[class^='styles_steps_']")

  const handler = useCallback(async () => {
    await highlightRows(setComplete)
  }, [setComplete])

  useEffect(() => {
    // Add event listener to each target element
    targetElement?.addEventListener("mouseover", handler)

    return () => {
      // Remove listeners
      targetElement?.removeEventListener("mouseover", handler)
    }
  }, [targetElement])

  // Remove listener
  useEffect(() => {
    if (complete) {
      targetElement?.removeEventListener("mouseover", handler)
    }
  }, [complete, targetElement])

  return <></>
}

export default Listener
