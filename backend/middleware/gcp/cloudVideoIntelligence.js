const videoIntelligence = require('@google-cloud/video-intelligence');
const client = new videoIntelligence.VideoIntelligenceServiceClient({
    projectId: 'demo1212-606bb',
    keyFilename: '/Users/sparshjhariya/Desktop/TECHY/Internship/Tasks/Salesine/call-transcript/serviceAccount.json',
  });


  async function analyzeVideoTranscript(fileName) {
    const videoContext = {
      speechTranscriptionConfig: {
        languageCode: 'en-US',
        enableAutomaticPunctuation: true,
      },
    };
    console.log(fileName)
    const request = {
      inputUri: fileName,
      features: ['SPEECH_TRANSCRIPTION','EXPLICIT_CONTENT_DETECTION' ,'LABEL_DETECTION','SHOT_CHANGE_DETECTION','LOGO_RECOGNITION','TEXT_DETECTIONx'],
      videoContext: videoContext,
    };
  
    const [operation] = await client.annotateVideo(request);
    console.log('Waiting for operation to complete...');
    const [operationResult] = await operation.promise();
    // There is only one annotation_result since only
    // one video is processed.
    // const annotationResults = operationResult.annotationResults[0];
  
    // for (const speechTranscription of annotationResults.speechTranscriptions) {
    //   // The number of alternatives for each transcription is limited by
    //   // SpeechTranscriptionConfig.max_alternatives.
    //   // Each alternative is a different possible transcription
    //   // and has its own confidence score.
    //   for (const alternative of speechTranscription.alternatives) {
    //     console.log('Alternative level information:');
    //     console.log(`Transcript: ${alternative.transcript}`);
    //     console.log(`Confidence: ${alternative.confidence}`);
  
    //     console.log('Word level information:');
    //     for (const wordInfo of alternative.words) {
    //       const word = wordInfo.word;
    //       const start_time =
    //         wordInfo.startTime.seconds + wordInfo.startTime.nanos * 1e-9;
    //       const end_time =
    //         wordInfo.endTime.seconds + wordInfo.endTime.nanos * 1e-9;
    //       console.log('\t' + start_time + 's - ' + end_time + 's: ' + word);
    //     }
    //   }
    // }

    // return annotationResults
    return operationResult
  }
  
 module.exports  = { analyzeVideoTranscript}