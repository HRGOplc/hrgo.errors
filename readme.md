## HR GO plc error logging interceptor

This module intercepts any http request to and from the application. It returns any request, and runs every response through a switch statement of the current errors thrown by the server:

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
	
## Usage

The logger is dependant on sweetAlert (http://oitozero.github.io/ngSweetAlert/#/home) which you will need to install.

Please add the logger to the root module of your application, eg:

    angular.module('app', ['hrgo.errors']);
    
The logger requires no more configuration, every response is interecepted and checked.

## Support

github issues plz