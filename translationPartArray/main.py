from translationCode import translation

# Update the following variables with the output of image part
listOfWords = ['dog','cat','table']
target = 'lt'


#the code
tr = translation.Translation()
tr.translate(listOfWords,target)

