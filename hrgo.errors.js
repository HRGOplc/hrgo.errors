/*global angular:true  */
(function() {

	'use strict';

	interceptor.$inject = ['$q', 'SweetAlert'];

	function interceptor($q, SweetAlert) { // $q
		return {
			request: function(config) {
				return config;
			},
			response: function(data) {

			/* HR GO Error Codes

				OK = 0,
				NotAuthenticated = 1,
				EmailNotValid = 2,
				EmailNotFound = 3,
				EmailAlreadyExists = 4,
				InvalidUsernameOrPassword = 5,
			    OldPasswordNotValid = 6,
				EditorNotApproved = 7,
				AccessDenied = 8,
				FileExtensionNotFound = 9,
				FileNotFound = 10,
				FileNameAlreadyExists = 11,
				FolderNameAlreadyExists = 12,
				FolderNotFound = 13,
				FolderCantBeMovedToItsSubfolder = 14,
				UserNotFound = 15,
				FileNotFoundInHistory = 16,
				StringExceedsCharacterLimit = 17,
				StringNotFoundInStringArray = 18,
				ParameterNotFound = 19
			*/

				switch (data.result) {

				case '0':
					return data;

				case '1':
					SweetAlert.swal('Error', 'The server rejected your request, you are not authenticated, please try again.', 'error');
					break;

				case '2':
					SweetAlert.swal('Error', 'The server rejected your request, your email address is not valid, please try again.', 'error');
					break;

				case '3':
					SweetAlert.swal('Error', 'The server rejected your request, your email address was not found, please try again.', 'error');
					break;

				case '4':
					SweetAlert.swal('Error', 'The server rejected your request, your email address has already been used, please try again.', 'error');
					break;

				case '5':
					SweetAlert.swal('Error', 'The server rejected your request, your username and/or password is not valid, please try again.', 'error');
					break;

				case '6':
					SweetAlert.swal('Error', 'The server rejected your request, your password is invalid or out of date, please try again.', 'error');
					break;

				case '7':
					SweetAlert.swal('Error', 'The server rejected your request, you do not have permission to edit this, please try again.', 'error');
					break;

				case '8':
					SweetAlert.swal('Error', 'The server rejected your request, you do not have the correct permissions to send this request, please try again.', 'error');
					break;

				case '9':
					SweetAlert.swal('Error', 'The server rejected your request, we cannot recognise the file extension, please try again.', 'error');
					break;

				case '10':
					SweetAlert.swal('Error', 'The server rejected your request, we could not find that file, please try again.', 'error');
					break;

				case '11':
					SweetAlert.swal('Error', 'The server rejected your request, that file name already exists, please try again.', 'error');
					break;

				case '12':
					SweetAlert.swal('Error', 'The server rejected your request, that folder name already exists, please try again.', 'error');
					break;

				case '13':
					SweetAlert.swal('Error', 'The server rejected your request, that folder could not be found, please try again.', 'error');
					break;

				case '14':
					SweetAlert.swal('Error', 'The server rejected your request, that folder cannot be moved to its subfolder, please try again.', 'error');
					break;

				case '15':
					SweetAlert.swal('Error', 'The server rejected your request, we could not find that user, please try again.', 'error');
					break;

				case '16':
					SweetAlert.swal('Error', 'The server rejected your request, we could not find that file in history, please try again.', 'error');
					break;

				case '17':
					SweetAlert.swal('Error', 'The server rejected your request, one of your fields exeeds the maximum character length, please try again', 'error');
					break;

				case '18':
					SweetAlert.swal('Error', 'The server rejected your request, your boolean parameters do not match the entries in the database (e.g. true/false => y/n), please try again', 'error');
					break;

				case '19':
					SweetAlert.swal('Error', 'The server rejected your request, we could not find a required parameter (' + data.resultMessage + '), please try again.', 'error');
					break;

				default:
					return data;
				}
			},
			responseError: function(rejection) {
				if (rejection.data) {
					SweetAlert.swal('Error', rejection.data, 'error');
				} else {
					SweetAlert.swal('Error', 'We did not have enough information to compose a detailed error for you, please contact the site administrators.', 'error');
				}
				return $q.reject(rejection);
			}
		};
	}

	goHttpInterceptor.$inject = ['$httpProvider'];

	function goHttpInterceptor($httpProvider) {
		$httpProvider.interceptors.push(interceptor);
	}

	angular
		.module('hrgo.errors', [])
		.config(goHttpInterceptor);

})();