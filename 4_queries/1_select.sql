SELECT teachers.name,
count(assistance_requests.*) as tot_requests
 FROM assistance_requests
 JOIN teachers ON teachers.id = teacher_id
 GROUP BY teachers.name;