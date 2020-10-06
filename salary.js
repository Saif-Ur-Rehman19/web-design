
   <script>
       var salary = parseInt(window.prompt("enter salary"));
       var deduce;
       var net_salary;
       if(salary >=30000){
           deduce = salary*(13/100);
           net_salary = salary-deduce;
           document.write("salary = "+salary+" net_salary = "+net_salary);

       }
       else
       if(salary >= 15000 && salary < 3000)
       {
        deduce = salary*(10/100);
        net_salary = salary-deduce;
        document.write("salary = "+salary+" net_salary = "+net_salary);
       }
       else
       document.write("net_salary = salary " +net_salary+" = "+salary);
        
