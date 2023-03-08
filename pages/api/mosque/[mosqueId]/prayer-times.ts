import { getPrayerTimesForMosque } from "@/services/PrayerTimesService"
import type { NextApiRequest, NextApiResponse } from "next"

export interface Data {
  id: string
  day: number
  month: number
  prayerTimes: PrayerTimes[]
  mosqueId: string
}

export interface PrayerTimes {
  fajr: PrayerTime
  sunrise: string
  zuhr: PrayerTime
  asr: PrayerTime
  maghrib: PrayerTime
  isha: PrayerTime
}

export interface PrayerTime {
  start: string
  startTwo: string | null
  jamaah: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { mosqueId } = req.query
  const prayerTimes = await getPrayerTimesForMosque(mosqueId as string)

  res.status(200).json(prayerTimes)
}
