import Request from '../services/Request';
export function requestApi(apiName, params = {}, successCallback=function(){},failureCallback=function(){},needAccountInfo = true) {
		const request = new Request(params, apiName, needAccountInfo);
	return dispatch =>{
		request.startPOST((response)=>{
			dispatch(
				{
				    type: apiName,
				    response: response
		  		}
		  	)
		  	response['apiName'] = apiName;
		  	successCallback(response);
		}, failureCallback);
	}
}


