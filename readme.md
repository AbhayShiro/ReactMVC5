## ASP.NET MVC5 template for React v16
- ES6 configured with Babel
- Webpack is used for front end tasks along with BrowserSync on port 3000
- Client side routing is based on ReactRouter v4
- All other MVC features can be used without hassle
- Stage-0 support added
- LESS support added.
- file-loader, style-loader, css-loader, json-loader, svg-inline-loader also added

## Known Issues
- If the page keeps loading, check what port ASP.NET project is running and add the same port in the configuration of BrowserSync in webpack.config.js

## Demo Code Use Case
 
 Employee table
 - id
 - First name
 - Last name
 - Employee number
 - Designation
 - Role
 - Address
 - Joining Date
 - SalaryID

 Salary table
 - id
 - Basic
 - HRA
 - DA
 - CA
 - PF

 N-Tier Architecture
 - Improved security over each Tier
	WebAPI layer can have its own security protocol whereas the WebApp can work on different security protocol.
 - Scalability
	Each tier can be scaled without effecting another tier. For example Database layer can be scaled by providing more database clusturs.
 - Easier to Maintain; different people can work simultanously on different layers
	UI developer can work on presentation layer whereas at the same time a DBA can work on Data Access Layer
 - Easily Enhanced
   Ex: Adding additional presentation layers

   ## ARCHITECTURE SHOULD BE INDEPENDENT OF FRAMEWORKS
   Repository Pattern
   - Repository mediates between domain and data layer acting like *an in-memory collection* of domain objects.
   - Avoids duplication of query logic.
   - This pattern decouples the application from the persistance framework (Entity Framework, LINQ to SQL, ADO.NET etc)
   - Unit testing is easier with this pattern
   - Generally an Repository looks like this:
		- Add(obj)
		- Remove(obj)
		- Get(id)
		- GetAll()
		- Find(predicate)
	- For update, just get the object and change the value.
		- To save the value, we use Unit Of Work pattern.

	## Implementation of Repository and Unit of Work Pattern
	- IRepository interface contains declaration for Add, Remove, Get(id), Find(predicate)
	- Repository is implemented from the above interface. This class will contain generic DBContext.
	- Each entity will have its own Interface for repository; for example: IEmployeeRepository.
		This interface can have method definition specific to the entity.
	- Each interface of entity repository needs its own implementation; example: EmployeeRepository, which derives from Generic Repository.
		This entity repository  will also contain method implementation specific to the entity.

	- IUnitOfWork interface contains collections of interface of various repositories. This also contains two additional methods like Save() and SaveAsync()

