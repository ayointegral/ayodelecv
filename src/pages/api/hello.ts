// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

/**
 * Handles an API request and sends a JSON response.
 * 
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Data>} res - The response object to send data back.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
