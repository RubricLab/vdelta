// Parse a HH:MM:SS.mmm string into milliseconds
export const parseTime = (timestamp: string): number => {
  const [hours, minutes, seconds] = timestamp.split(":")
  const [sec, _] = seconds.split(".")

  return +hours * 60 * 60 + +minutes * 60 + +sec
}

export const highlightRows = async (setComplete: any) => {
  // Wait 1 ms
  await new Promise((r) => setTimeout(r, 1))

  // Select all log rows
  const rows = document.querySelectorAll("[class^='log-table_row']")

  for (let i = 0; i < rows.length - 1; i++) {
    // Get timestamp from current and next row
    const timestampCell = rows[i].querySelector('[id^="l"]')

    if (timestampCell) {
      const currentTimestamp = parseTime(timestampCell.textContent.trim())

      const nextTimestampCell = rows[i + 1].querySelector('[id^="l"]')

      if (!nextTimestampCell) continue

      const nextTimestamp = parseTime(nextTimestampCell.textContent.trim())

      // Calculate diff
      const diff = nextTimestamp - currentTimestamp

      if (diff <= 1) continue

      // Highlight row depending on diff (in seconds)
      const row = rows[i] as HTMLElement

      // red-500, orange-400, or amber-500
      row.style.backgroundColor =
        diff > 5 ? "#EF444466" : diff > 3 ? "#FB923C66" : "#FBBF2466"

      setComplete(true)
    }
  }
}
