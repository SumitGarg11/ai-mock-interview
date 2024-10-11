"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, {useEffect,useState} from 'react'
import Webcam from 'react-webcam'




function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null); // Start with null
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    
    GetInterviewDetails();
  }, []);

  /**
   * Fetch Interview Details by MockId/Interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]); // Set the first interview result
  };

  return (
    <div className="my-10">
      <h2 className="font-extrabold text-3xl ml-6 text-primary">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="ml-5">
          {webCamEnabled ? (
            <Webcam className='mt-5 -ml-9'
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height:'300px',
                width:'100%',
               
                borderRadius: '0.5rem',
          
                 }}
            />
          ) : (
            <>
              <WebcamIcon mirrored={true} className=" h-72 w-full  my-7 p-20 bg-secondary rounded-lg border" 
              />
              <Button onClick={() => setWebCamEnabled(true)} className="w-full">
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-col my-5 mt-7 ml-3 gap-5">
          <div className="flex flex-col p-5 rounded-lg border gap-5 bg-blue-600/20  -ml-5 ">
            {interviewData ? ( // Conditional rendering
              <>
                <h2 className="text-lg">
                  <strong className='text-primary' >Job Role / Job Position: </strong>
                  {interviewData.jobPosition}
                </h2>
                <h2 className="text-lg ">
                  <strong className='text-primary'>Job Description: </strong>
                  {interviewData.jobDesc}
                </h2>
                <h2 className="text-lg">
                  <strong className='text-primary'>Year of Experience: </strong>
                  {interviewData.jobExperience}
                </h2>
              </>
            ) : (
              <p className='text-primary' >Loading interview details...</p>
            )}
          </div>

          <div className="p-5 border rounded-lg border-primary bg-blue-500/10 -ml-5">
            <h2 className="flex gap-2 text-xl font-extrabold items-center text-purple-900">
              <Lightbulb />
              <strong >Information</strong>
            </h2>
            <h2 className="mt-3 font-bold ">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">

        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
          <Button className="-ml-5" >Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;

