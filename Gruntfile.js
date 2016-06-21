module.exports = function(grunt) {
    grunt.initConfig({
    	
       	
   		uglify: {
            scripts: {
                expand: true,
                src: 'https://github.com/nikja10/demonode.git/**.js',
                dest: 'build/',
                ext: '.min.js'
            },
        },
  		
        
    	        
	jshint: {
scripts: {
                src:['https://github.com/nikja10/demonode.git/**.js', 'https://github.com/nikja10/demonode.git/**.html'],
            },
			options: {
		reporter: require('jshint-jenkins-checkstyle-reporter'),
		reporterOutput: 'jshint-report/report-jshint-checkstyle.xml'
	},
	
},	
 

  
    	node_mocha: {
 		   
            without_coverage : {
                  src : ['test/*.js'],
                  options : {
                      mochaOptions : {
                          globals : ['expect'],
                          timeout : 3000,
                          ignoreLeaks : false,						
                          ui : 'bdd',
                          reporter : 'landing'                        
                      }
                  }
              } ,
              with_coverage: {
                  src : ['test/*.js'],
                  options : {
                      mochaOptions : {
                          globals : ['expect'],
                          timeout : 3000,
                          ignoreLeaks : false,
                          ui : 'bdd',
                          //reporter : 'mocha-cobertura-reporter',
  						//output: 'build/cobertura.xml'
                      },
                      reportFormats : ['cobertura','html'], // other grunt-mocha-istanbul can be added here
                      runCoverage : true ,
  					output: 'coverage/cobertura.xml' // Run the unit test and generate coverage test
                  }
              }
          }    	
     	
    	
});
    
    
        grunt.loadNpmTasks('grunt-contrib-uglify');   
       grunt.loadNpmTasks('grunt-contrib-jshint'); 
grunt.loadNpmTasks('jshint-jenkins-checkstyle-reporter');  
      grunt.loadNpmTasks('grunt-node-mocha');  
};