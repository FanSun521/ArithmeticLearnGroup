var generate = function(numRows) {
    var arr=[];
    var row=[];
    for(var i=0;i<numRows;i++)
    {
        if(i==0)
        {
            arr[0]=[1];
        }
        else if(i==1)
        {
            arr[1]=[1,1];
        }
        else
        {
            for(var j=0;j<i+1;j++)
            {
                if(j==0)
                {
                    row[j]=1;
                }
                else if(j==i)
                {
                    row[j]=1;
                }
                else
                {
                    row[j]=arr[i-1][j-1]+arr[i-1][j];
                }
            }
            arr.push(row);
            row=[];
        }
        
    }
    return arr;
};