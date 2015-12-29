# Import smtplib for the actual sending function
import smtplib

from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

COMMASPACE = ', '

# me == the sender's email address
# family = the list of all recipients' email addresses
me = 'pzingg@kentfieldschools.org'
family = [ 'pzingg@kentfieldschools.org', 'webmaster@kentfieldschools.org' ]

# Create the container (outer) email message.
msg = MIMEText('Our family reunion was fun!')
msg['Subject'] = 'Our family reunion'
msg['From'] = me
msg['To'] = COMMASPACE.join(family)

# Send the email via our own SMTP server.
s = smtplib.SMTP('172.16.121.233')
s.sendmail(me, family, msg.as_string())
s.quit()
